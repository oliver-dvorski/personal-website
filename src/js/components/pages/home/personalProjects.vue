<template>
    <div>
        <section class="personal-projects">
            <div class="container mx-auto">
                <section-heading></section-heading>
                <section-body></section-body>
            </div>
        </section>
    </div>
</template>

<script>
    import sectionHeading from './personalProjects/heading'
    import sectionBody from './personalProjects/body'

    export default {
        components: {
            sectionHeading,
            sectionBody
        }
    }
</script>
