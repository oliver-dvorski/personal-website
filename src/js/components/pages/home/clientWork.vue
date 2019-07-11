<template>
    <div>
        <section class="client-work">
            <div class="container mx-auto">
                <section-heading></section-heading>
                <section-body></section-body>
            </div>
        </section>
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
