import { AppRoutingModule } from './app-routing.module';

describe('AppRoutinModule', () => {
  let appRoutinModule: AppRoutingModule;

  beforeEach(() => {
    appRoutinModule = new AppRoutingModule();
  });

  it('should create an instance', () => {
    expect(appRoutinModule).toBeTruthy();
  });
});
