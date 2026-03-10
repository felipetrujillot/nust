<script setup lang="ts">
const toast = useToast();

function addToCalendar() {
  const eventDate = new Date(Date.now() + Math.random() * 31536000000);
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  toast.add({
    title: "Event added to calendar",
    description: `This event is scheduled for ${formattedDate}.`,
    icon: "i-lucide-calendar-days",
  });
}

const { $trpc } = useNuxtApp();
onMounted(async () => {
  const res = await $trpc.test.query();
  console.log({ res });
});
</script>

<template>
  <UButton
    label="Add to calendar"
    color="neutral"
    variant="outline"
    icon="i-lucide-plus"
    @click="addToCalendar"
  />
</template>
