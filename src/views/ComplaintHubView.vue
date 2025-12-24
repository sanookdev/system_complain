<template>
  <div
    class="min-h-screen bg-base-200 flex flex-col items-center justify-center py-10 px-4 font-sans relative overflow-hidden"
  >
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-br from-error/10 to-transparent rounded-full blur-[100px] opacity-60"
      ></div>
      <div
        class="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[100px] opacity-60"
      ></div>
    </div>

    <div class="max-w-5xl w-full relative z-10">
      <div class="text-center mb-16 space-y-2">
        <h1
          class="text-3xl md:text-5xl font-extrabold text-base-content tracking-tight"
        >
          ศูนย์รับเรื่องร้องเรียนและข้อเสนอแนะ
        </h1>
        <p class="text-xl text-base-content/60 font-medium">
          Complaints and Suggestions Center
        </p>
        <div
          class="w-24 h-1.5 bg-gradient-to-r from-error to-primary mx-auto rounded-full mt-4 opacity-80"
        ></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <a
          href="http://203.131.209.137/main/RiskRegister/#/"
          target="_blank"
          class="group relative bg-base-100 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-error/20 border border-transparent hover:border-error/30 overflow-hidden flex flex-col h-full"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-error/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-duration-500"
          ></div>

          <ShieldAlert
            class="absolute -right-6 -bottom-6 w-48 h-48 text-error/5 group-hover:text-error/10 transition-all duration-500 -rotate-12"
          />

          <div class="relative z-10 flex flex-col h-full">
            <div
              class="w-16 h-16 rounded-2xl bg-error/10 text-error flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300"
            >
              <ShieldAlert class="w-8 h-8" />
            </div>

            <h2
              class="text-2xl font-bold text-base-content mb-1 group-hover:text-error transition-colors"
            >
              ระบบบริหารความเสี่ยง
            </h2>
            <p
              class="text-sm font-semibold text-error/80 uppercase tracking-wide mb-4"
            >
              Risk Management System
            </p>

            <p
              class="text-base-content/70 text-lg leading-relaxed mb-8 flex-grow"
            >
              แจ้งอุบัติการณ์ ความเสี่ยง หรือเหตุฉุกเฉินต่างๆ ภายในองค์กร
              <span class="block text-sm text-base-content/50 mt-1 font-normal"
                >Report incidents, risks, or emergencies.</span
              >
            </p>

            <div
              class="flex items-center text-error font-semibold group-hover:translate-x-2 transition-transform"
            >
              แจ้งเหตุ
              <ArrowRight class="w-5 h-5 ml-2" />
            </div>
          </div>
        </a>

        <a
          href="mailto:meddeantu@gmail.com"
          target="_blank"
          class="group relative bg-base-100 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/20 border border-transparent hover:border-primary/30 overflow-hidden flex flex-col h-full"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-duration-500"
          ></div>

          <Megaphone
            class="absolute -right-6 -bottom-6 w-48 h-48 text-primary/5 group-hover:text-primary/10 transition-all duration-500 -rotate-12"
          />

          <div class="relative z-10 flex flex-col h-full">
            <div
              class="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300"
            >
              <Megaphone class="w-8 h-8" />
            </div>

            <h2
              class="text-2xl font-bold text-base-content mb-1 group-hover:text-primary transition-colors"
            >
              สายตรงคณบดี
            </h2>
            <p
              class="text-sm font-semibold text-primary/80 uppercase tracking-wide mb-4"
            >
              Dean's Direct Line
            </p>

            <p
              class="text-base-content/70 text-lg leading-relaxed mb-8 flex-grow"
            >
              ส่งข้อเสนอแนะเชิงนโยบาย หรือเรื่องสำคัญถึงผู้บริหารสูงสุดโดยตรง
              <span class="block text-sm text-base-content/50 mt-1 font-normal"
                >Submit policy recommendations directly to the Dean.</span
              >
            </p>

            <div
              class="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform"
            >
              ส่งเรื่องร้องเรียน
              <ArrowRight class="w-5 h-5 ml-2" />
            </div>
          </div>
        </a>
      </div>

      <div class="text-center mt-12 text-base-content/40 text-sm">
        © Faculty of Medicine, Thammasat University
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap");

.font-sans {
  font-family: "Sarabun", ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
</style>