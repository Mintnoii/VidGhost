<template>
    <svg
			aria-hidden="true"
			:width="width || size"
			:height="height || size"
			:class="className">
	    <use :xlink:href="symbolId" :fill="color" />
    </svg>
</template>
<script setup lang="ts" name="SvgIcon">
interface Props {
	prefix?: string
	name?: string
	color?: string
	size?: number
	width?: number
	height?: number
	className?: string
	dir?: string
}

const props = withDefaults(defineProps<Props>(), {
	prefix: 'svg-icon',
	name: '',
	color: '#fff',
	size: 16,
	width: 16,
	height: 16,
	className: 'svg-icon',
	dir: '',
})

const symbolId = computed(() => {
	return props.dir?.length
		? `#${props.prefix}-${props.dir}/${props.name}`
		: `#${props.prefix}-${props.name}`
})
</script>

<style lang="scss" scoped>
.svg-icon {
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
}
</style>