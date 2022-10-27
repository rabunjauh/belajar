test("test toBe", () => {
    const name = "Eko";
    const hello = `Hello ${name}`;

    expect(hello).toBe('Hello Eko');
});

test("Test toEqual", () => {
    let person = {id: "eko"};
    Object.assign(person, {name: "Eko"});

    expect(person).toEqual({id: "eko", name: "Eko"});
});