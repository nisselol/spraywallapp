import { Database, supabase } from '../lib/supabase';


type Climb = Database['public']['Tables']['climbs']['Row'];
type ClimbInsert = Database['public']['Tables']['climbs']['Insert'];
type ClimbUpdate = Database['public']['Tables']['climbs']['Update'];

export interface ClimbWithProfile extends Climb {
  profiles: {
    username: string;
    avatar_url: string | null;
  } | null;
}

export class ClimbService {
  // Create a new climb
  static async createClimb(climb: ClimbInsert): Promise<{ data: Climb | null; error: any }> {
    try {
      const { data, error } = await supabase
        .from('climbs')
        .insert(climb)
        .select()
        .single();

      return { data, error };
    } catch (error) {
      return { data: null, error };
    }
  }

  // Get user's climbs
  static async getUserClimbs(userId: string): Promise<{ data: Climb[] | null; error: any }> {
    try {
      const { data, error } = await supabase
        .from('climbs')
        .select('*')
        .eq('user_id', userId)
        .order('completed_at', { ascending: false });

      return { data, error };
    } catch (error) {
      return { data: null, error };
    }
  }

  // Get public climbs (for leaderboard/feed)
  static async getPublicClimbs(limit = 50): Promise<{ data: ClimbWithProfile[] | null; error: any }> {
    try {
      const { data, error } = await supabase
        .from('climbs')
        .select(`
          *,
          profiles (
            username,
            avatar_url
          )
        `)
        .eq('is_public', true)
        .order('completed_at', { ascending: false })
        .limit(limit);

      return { data, error };
    } catch (error) {
      return { data: null, error };
    }
  }

  // Update a climb
  static async updateClimb(id: string, updates: ClimbUpdate): Promise<{ data: Climb | null; error: any }> {
    try {
      const { data, error } = await supabase
        .from('climbs')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      return { data, error };
    } catch (error) {
      return { data: null, error };
    }
  }

  // Delete a climb
  static async deleteClimb(id: string): Promise<{ error: any }> {
    try {
      const { error } = await supabase
        .from('climbs')
        .delete()
        .eq('id', id);

      return { error };
    } catch (error) {
      return { error };
    }
  }

  // Search climbs by route name or crag
  static async searchClimbs(query: string, userId?: string): Promise<{ data: Climb[] | null; error: any }> {
    try {
      let queryBuilder = supabase
        .from('climbs')
        .select('*')
        .or(`route_name.ilike.%${query}%,crag_name.ilike.%${query}%`);

      if (userId) {
        queryBuilder = queryBuilder.eq('user_id', userId);
      } else {
        queryBuilder = queryBuilder.eq('is_public', true);
      }

      const { data, error } = await queryBuilder
        .order('completed_at', { ascending: false })
        .limit(20);

      return { data, error };
    } catch (error) {
      return { data: null, error };
    }
  }

  // Get climbs by grade
  static async getClimbsByGrade(grade: string, userId?: string): Promise<{ data: Climb[] | null; error: any }> {
    try {
      let queryBuilder = supabase
        .from('climbs')
        .select('*')
        .eq('grade', grade);

      if (userId) {
        queryBuilder = queryBuilder.eq('user_id', userId);
      } else {
        queryBuilder = queryBuilder.eq('is_public', true);
      }

      const { data, error } = await queryBuilder
        .order('completed_at', { ascending: false });

      return { data, error };
    } catch (error) {
      return { data: null, error };
    }
  }

  // Get user statistics
  static async getUserStats(userId: string): Promise<{ 
    data: { 
      totalClimbs: number; 
      gradeDistribution: Record<string, number>;
      recentActivity: Climb[];
    } | null; 
    error: any 
  }> {
    try {
      const { data: climbs, error } = await supabase
        .from('climbs')
        .select('*')
        .eq('user_id', userId);

      if (error) return { data: null, error };

      const totalClimbs = climbs?.length || 0;
      const gradeDistribution: Record<string, number> = {};
      
      climbs?.forEach(climb => {
        gradeDistribution[climb.grade] = (gradeDistribution[climb.grade] || 0) + 1;
      });

      const recentActivity = climbs
        ?.sort((a, b) => new Date(b.completed_at).getTime() - new Date(a.completed_at).getTime())
        .slice(0, 5) || [];

      return {
        data: {
          totalClimbs,
          gradeDistribution,
          recentActivity,
        },
        error: null,
      };
    } catch (error) {
      return { data: null, error };
    }
  }
} 