<template>
    <div class="login-container hr-theme">
        <div class="logo">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="HR Logo" />
        </div>
        <h1>เข้าสู่ระบบ HR</h1>
        <p>กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบ HR Management</p>
        <form class="login-form" @submit="onLogin">
            <input type="text" placeholder="อีเมล" v-model="email" />
            <input type="password" placeholder="รหัสผ่าน" v-model="password" />
            <button type="submit" class="btn" :disabled="loading">
                {{ loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ' }}
            </button>
        </form>
        <div class="actions">
            <button class="btn secondary">สมัครสมาชิก</button>
            <button class="btn google">
                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" class="icon" />
                เข้าสู่ระบบด้วย Google
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const loading = ref(false)

const onLogin = async (e: Event) => {
    e.preventDefault()
    loading.value = true
    await new Promise(resolve => setTimeout(resolve, 1500))
    loading.value = false
    // TODO: handle response จาก backend ที่นี่
}
</script>


