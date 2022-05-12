import { Extension } from 'magic-sdk';
import { UserInformation } from './types';

export class ConnectExtension extends Extension.Internal<'connect'> {
  name = 'connect' as const;
  config = {
    mc: true,
  };

  public showWallet(): void {
    // implement me
  }

  public async promptUserForInformation(): Promise<UserInformation> {
    // implement me
    return {} as UserInformation;
  }

  public disconnect(): void {
    // implement me
  }
}