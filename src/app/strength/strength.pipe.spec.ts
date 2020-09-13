import { StrengthPipe } from './strength.pipe';
describe("StrengthPipe", () => {
    it("should display weak if strength is 5", () => {
        let pipe = new StrengthPipe();

        let actual = pipe.transform(5);

        expect(actual).toEqual('5 (weak)');
    });

    it("should display strong if strength is 10", () => {
        let pipe = new StrengthPipe();

        let actual = pipe.transform(10);

        expect(actual).toEqual('10 (strong)');
    });

});