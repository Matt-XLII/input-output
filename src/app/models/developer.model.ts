import { Skill } from './skill.model';

export class Developer{
    constructor(
        public name: string,
        public lastname: string,
        public age: number,
        public gender: string,
        public bio : string,
        public skills: Skill[],
    ){}
}