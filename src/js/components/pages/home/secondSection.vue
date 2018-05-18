<template>
    <div>
        <section class="second-section">
            <div class="container mx-auto">
                <section-heading></section-heading>
                <section-body></section-body>
            </div>
        </section>
    </div>
</template>

<script>
    import sectionHeading from './secondSection/heading'
    import sectionBody from './secondSection/body'

    export default {
        components: {
            sectionHeading,
            sectionBody
        }
    }
</script>
