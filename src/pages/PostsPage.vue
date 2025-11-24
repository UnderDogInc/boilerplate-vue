<script lang="ts" setup>
import { usePostsQuery } from "@/entities/post";
import PostCard from "@/features/post-card/ui/PostCard/PostCard.vue";

const { data: posts, isLoading, isError, error } = usePostsQuery();
</script>

<template>
  <div class="posts-page">
    <div
      v-if="isLoading"
      class="flex items-center justify-center w-full min-h-screen"
    >
      <div class="text-center">
        <i class="pi pi-spin pi-spinner text-4xl text-primary mb-4"></i>
        <p class="text-lg text-gray-600">Загрузка постов...</p>
      </div>
    </div>

    <div
      v-else-if="isError"
      class="flex items-center justify-center w-full min-h-screen p-8"
    >
      <div class="text-center max-w-md">
        <i class="pi pi-exclamation-triangle text-5xl text-red-500 mb-4"></i>
        <h2 class="text-xl font-semibold text-gray-800 mb-2">
          Ошибка загрузки
        </h2>
        <p class="text-gray-600">
          {{ error?.message || "Неизвестная ошибка" }}
        </p>
      </div>
    </div>

    <div
      v-else-if="posts && posts.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 min-h-screen"
    >
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>

    <div
      v-else
      class="flex items-center justify-center w-full min-h-screen"
    >
      <div class="text-center">
        <i class="pi pi-inbox text-5xl text-gray-400 mb-4"></i>
        <p class="text-lg text-gray-600">Нет постов для отображения</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.posts-page {
  @apply bg-gray-50;
}
</style>

