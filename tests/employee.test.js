const Employee = require("../lib/employee");

describe("Employee", () => {

    it("Can set employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("Object")
    });

    it("Can set employee name", () => {
        const name = "Zach";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("Can set employee ID", () => {
        const testValue = 100;
        const e = new Employee("Riley", testValue);
        expect(e.id).toBe(testValue);
    });

    it("Can set employee email", () => {
        const testValue = "test@test.com";
        const e = new Employee("Riley", 1, testValue);
        expect(e.email).toBe(testValue); 
    });

    describe("getName", () => {
        it("can get name via getName", () => {
            const testValue = "Zach";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });

    describe("getID", () => {
        it("can get ID via getID", () => {
            const testValue = 100;
            const e = new Employee("Riley", testValue)
            expect(e.getId()).toBe(testValue)
        });
    });

    describe("getEmail", () => {
        it ("can get email via getEmail", () => {
            const testValue = "test@test.com";
            const e = new Employee("Riley", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });

    describe("getRole", () => {
        it("getRole() should return /Employee/", () => {
            const testValue = "Employee";
            const e = new Employee("Zach", 1, "test@test.com")
            expect(e.getRole()).toBe(testValue);
        });
    });



})