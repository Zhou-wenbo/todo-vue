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
    // 检查用户名是否已存在
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

    // 注册
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
      if (data.session) {
        localStorage.setItem('supabase.session', JSON.stringify(data.session))
      }
      return data
    },

    // 登录（修复：确保存储 session）
    async login(username: string, password: string) {
      const email = usernameToEmail(username)
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error

      // 关键修复：必须检查并存储 session
      if (!data.session) {
        throw new Error('登录成功但未返回 session，请检查 Supabase 邮箱确认设置是否关闭')
      }

      this.user = data.user
      this.session = data.session
      localStorage.setItem('supabase.session', JSON.stringify(data.session))
      return data
    },

    // 登出
    async logout() {
      await supabase.auth.signOut()
      this.user = null
      this.session = null
      localStorage.removeItem('supabase.session')
    },

    // 页面加载时恢复 session
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