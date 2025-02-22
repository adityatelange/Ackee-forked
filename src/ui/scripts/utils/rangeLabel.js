import ranges from '../../../constants/ranges'

export default (range) => {
	return ({
		[ranges.RANGES_LAST_24_HOURS]: 'Last 24 hours',
		[ranges.RANGES_LAST_7_DAYS]: 'Last 7 days',
		[ranges.RANGES_LAST_30_DAYS]: 'Last 30 days',
		[ranges.RANGES_LAST_6_MONTHS]: 'Last 6 months',
		[ranges.RANGES_LAST_1_YEAR]: 'Last 1 year',
	})[range]
}