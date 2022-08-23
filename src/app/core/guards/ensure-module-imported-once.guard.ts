/**
 * This abstract class used for module building by extending this class
 * prevents importing the module into somewhere else than root App Module.
 */
export abstract class EnsureModuleImportedOnceGuard {
  protected constructor(targetModule: unknown, moduleName: string) {
    if (targetModule) {
      throw new Error(`${moduleName} has already been loaded. Import this module in the AppModule only.`);
    }
  }
}
