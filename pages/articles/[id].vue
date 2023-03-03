<template>
    <div>
        {{ JSON.stringify(article) }}
    </div>
</template>

<script setup>
const route = useRoute()
const params = route.params
const {id} = params
const news = [{
    id: 1,
    title: "Grimwood City in production",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    img: 'https://picsum.photos/600',
    url: '/articles/1'
  },
  {
    id: 2,
    title: "Rise of Midnight Sun",
    description: "Coming Soon! A new adventure set in the exciting world of Grimwood City. Can your party help the mayor save his son before he has to pardon a terriost?",
    img: 'https://picsum.photos/600',
    url: '/articles/2'
  },
  {
    id: 3,
    title: "Article 3",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    img: 'https://picsum.photos/600',
    url: '/articles/3'
  },
  {
    id: 4,
    title: "Article 4",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    img: 'https://picsum.photos/600',
    url: '/articles/4'
  },
  {
    id: 5,
    title: "Article 5",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    img: 'https://picsum.photos/600',
    url: '/articles/5'
  }
]
const article =news[parseInt(id)]
</script>

<style lang="scss" scoped>

</style>