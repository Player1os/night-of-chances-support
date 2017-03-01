import StringDataType from '@/src/common/data_types/string';

export default class UnicodeStringDataType extends StringDataType {
	static get invalidMessage() {
		return 'Must be a textual entry';
	}
}