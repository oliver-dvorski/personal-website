<template>
    <div>
        <fancy-header>
            <h1>Oliver Dvorski</h1>
            <p slot="subtitle">Full stack web developer</p>
        </fancy-header>
        <first-section></first-section>
        <second-section></second-section>
        <page-footer></page-footer>
    </div>
</template>

<script>
    import firstSection from './firstSection'
    import secondSection from './secondSection'
    import pageFooter from './footer'

    export default {
        components: { firstSection, secondSection, pageFooter }
    }
</script>
