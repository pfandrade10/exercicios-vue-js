<template>
    <div class="sidebar">
        <transition name="slide">
            <div
                 class="sidebar-panel">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        data: () => ({
            isPanelOpen: true
        }),
        methods: {
            closeSidebarPanel() {
                this.isPanelOpen = false
            }
        }
    }
</script>
<style>
    .sidebar-panel {
        overflow-y: auto;
        background-color: #2c3e50;
        position: fixed;
        left: 0;
        bottom: 0;
        height: calc(100% - 150px);
        z-index: 999;
        padding: 0px;
        width: 250px;
    }
</style>