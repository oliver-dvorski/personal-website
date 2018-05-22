<template>
    <div>
        <section class="client-work">
            <div class="container mx-auto">
                <section-heading></section-heading>
                <section-body></section-body>
            </div>
        </section>
        <div class="shape">
            <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="1413.6513" height="92.3478" viewBox="0 0 374.0286 24.4337"><path d="M374.0286 0s-38.6154 24.4337-187.0143 24.4337C38.6153 24.4337 0 0 0 0z" fill="#f4f7f9"/></svg>
        </div>
    </div>
</template>

<script>
    import sectionHeading from './clientWork/heading'
    import sectionBody from './clientWork/body'

    export default {
        components: {
            sectionHeading,
            sectionBody
        }
    }
</script>

<style lang="sass" scoped>
    .shape::before
        background: #f4f7f9
</style>
