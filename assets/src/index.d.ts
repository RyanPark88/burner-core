import Asset from './Asset';
import ERC20Asset from './ERC20Asset';

export { default as Asset } from './Asset';
export { default as ERC20Asset } from './ERC20Asset';
export { default as NativeAsset } from './NativeAsset';

export const eth: Asset;
export const dai: ERC20Asset;
export const xdai: Asset;
