import { useDispatch as nativeUseDispatch, useSelector as nativeUseSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/store';

export const useDispatch = nativeUseDispatch as () => AppDispatch;
export const useSelector = nativeUseSelector as <TSelected>(
  selector: (state: RootState) => TSelected
) => TSelected;
