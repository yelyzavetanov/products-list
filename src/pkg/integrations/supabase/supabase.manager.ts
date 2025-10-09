import { createClient, SupabaseClient } from '@supabase/supabase-js'

import { envServer } from './../../../config/env/env.server'

import 'server-only'

// supabase manager
class SupabaseManager {
  private static instance: SupabaseClient | null = null

  static getClient(): SupabaseClient {
    if (!SupabaseManager.instance) {
      SupabaseManager.instance = createClient(envServer.SUPABASE_URL!, envServer.SUPABASE_SERVICE_ROLE_KEY!)
    }
    return SupabaseManager.instance
  }

  static async disconnect(): Promise<void> {
    if (SupabaseManager.instance) {
      try {
        await SupabaseManager.instance.removeAllChannels()
      } catch (err) {
        console.error('Error while disconnecting Supabase:', err)
      } finally {
        SupabaseManager.instance = null
      }
    }
  }
}

export default SupabaseManager
