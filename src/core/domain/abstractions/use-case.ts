export interface UseCase<T = void, R = void> {
  execute(input: T): R;
}
