class Transaction {
    date: string;
	type: string;
	value: number;
    
	constructor(date: string, value: number, type: string) {
        this.date = date;
		this.value = value;
		this.type = type;
	}
}

export { Transaction };