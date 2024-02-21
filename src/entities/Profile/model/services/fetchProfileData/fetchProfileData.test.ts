import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchProfileData } from "./fetchProfileData";
import { Currency } from "../../../../Currency";
import { Country } from "../../../../Country";
const data = {
    firstName: "Alex",
    lastName: "Profi",
    age: 29,
    currency: Currency.RUB,
    country: Country.Armenia,
    city: "Taganrog",
    username: "admin",
};
describe("fetchProfileData.test", () => {
    test("success", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });
    test("error profile", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe("rejected");
    });
});
