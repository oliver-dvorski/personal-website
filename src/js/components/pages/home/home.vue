<template>
    <div>
        <page-header></page-header>
        <first-section></first-section>
        <second-section></second-section>
        <page-footer></page-footer>
    </div>
</template>

<script>
    import pageHeader from './pageHeader'
    import firstSection from './firstSection'
    import secondSection from './secondSection'
    import pageFooter from './footer'

    export default {
        components: { pageHeader, firstSection, secondSection, pageFooter }
    }
</script>
