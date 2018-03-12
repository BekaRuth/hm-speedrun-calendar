export class Person {
    constructor(
        public id: number,
        public name: string,
        public schedule: Array<any>,
        public image: string,
        public today?: string,
    ) { }
}
