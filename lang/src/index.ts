interface Name {
    name: string | undefined
}

interface Age {
    age: number | undefined
}

class Person implements Name, Age {
    name: string | undefined = undefined
    age: number | undefined = undefined
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}