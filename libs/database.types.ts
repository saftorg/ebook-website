export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      active_download_users: {
        Row: {
          created_at: string;
          id: string;
          submission_id: number;
        };
        Insert: {
          created_at?: string;
          id?: string;
          submission_id: number;
        };
        Update: {
          created_at?: string;
          id?: string;
          submission_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "active_download_users_submission_id_fkey";
            columns: ["submission_id"];
            referencedRelation: "submissions";
            referencedColumns: ["id"];
          },
        ];
      };
      submissions: {
        Row: {
          created_at: string;
          email: string;
          id: number;
          first_name: string;
          last_name: string;
        };
        Insert: {
          created_at?: string;
          email: string;
          id?: number;
          first_name: string;
          last_name?: string;
        };
        Update: {
          created_at?: string;
          email?: string;
          id?: number;
          first_name?: string;
          last_name?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
