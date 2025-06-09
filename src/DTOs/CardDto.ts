export default interface CardDTO {
    Title: String;
    Subtitle: String;
    Rate: number;
    Categories: CategoryDTO[];
    Address: AddressDTO;
    WorkingDays: WorkingDayDTO[];
}

interface CategoryDTO {
    id: number;
    category: String;
    subcategories: SubcategoryDTO[];
}

interface SubcategoryDTO {
    id: number;
    subcategory: String;
}
interface AddressDTO {
    zipcode: String;
    address: String;
    number: String;
    complement: String;
    city: String;
    neighbor: String;
}

interface WorkingDayDTO {
    day: String;
    start: String;
    end: String;
}