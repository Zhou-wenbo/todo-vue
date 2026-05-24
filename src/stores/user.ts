import { defineStore } from 'pinia'
import { supabase } from '../supabase'
import type { User } from '@supabase/supabase-js'

const usernameToEmail = (username: string) => `${username}@todoapp.local`

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    session: null as any | null,
  }),
  actions: {
    async checkUsername(username: string): Promise<boolean> {
      const { data, error } = await supabase
        .from('profiles')
        .select('username')
        .eq('username', username)
        .maybeSingle()
      if (error) {
        console.error('检查用户名失败', error)
        return false
      }
      return !!data
    },
    async register(username: string, password: string) {
      const exists = await this.checkUsername(username)
      if (exists) throw new Error('用户名已被占用')
      const email = usernameToEmail(username)
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { username } }
      })
      if (error) throw error
      this.user = data.user
      this.session = data.session
      if (data.session) localStorage.setItem('supabase.session', JSON.stringify(data.session))
      return data
    },
    async login(username: string, password: string) {
      const email = usernameToEmail(username)
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      this.user = data.user
      this.session = data.session
      localStorage.setItem('supabase.session', JSON.stringify(data.session))
      return data
    },
    async logout() {
      await supabase.auth.signOut()
      this.user = null
      this.session = null
      localStorage.removeItem('supabase.session')
    },
    loadSession() {
      const sessionStr = localStorage.getItem('supabase.session')
      if (sessionStr) {
        try {
          const session = JSON.parse(sessionStr)
          this.session = session
          this.user = session.user
        } catch (e) {
          console.error('解析 session 失败', e)
        }
      }
    }
  }
})