export default interface IUUID {
    makeId(): string;
    isValid(id: string): boolean;
}
