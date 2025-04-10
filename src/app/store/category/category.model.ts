export interface CategoryModel {
  id?: number;
  name: string;
  slug: string;
}

export interface CategoryState {
  categories: CategoryModel[];
  category: CategoryModel | null;
  isOpen: boolean;
  isLoading: boolean;
  errorMessage: string;
}
