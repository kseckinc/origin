import {
  BuyBundleDTO,
  BundlePublicDTO,
  getBundleControllerAvailableBundleSplitsQueryKey,
  getBundleControllerGetAvailableBundlesQueryKey,
  getBundleControllerGetMyBundlesQueryKey,
  useBundleControllerBuyBundle,
} from '@energyweb/exchange-react-query-client';
import {
  NotificationTypeEnum,
  showNotification,
} from '@energyweb/origin-ui-core';
import { BigNumber } from '@ethersproject/bignumber';
import { useTranslation } from 'react-i18next';
import { useQueryClient } from 'react-query';

export const useBuyBundleHandler = (
  volume: BigNumber,
  closeModal: () => void
) => {
  const { t } = useTranslation();
  const { mutate } = useBundleControllerBuyBundle();
  const queryClient = useQueryClient();
  const myBundlesQueryKey = getBundleControllerGetMyBundlesQueryKey();
  const allBundlesQueryKey = getBundleControllerGetAvailableBundlesQueryKey();

  return (bundleId: BundlePublicDTO['id']) => {
    const bundleSplitsQueryKey =
      getBundleControllerAvailableBundleSplitsQueryKey(bundleId);

    const data: BuyBundleDTO = {
      bundleId,
      volume: volume.toString(),
    };

    mutate(
      { data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(myBundlesQueryKey);
          queryClient.invalidateQueries(allBundlesQueryKey);
          queryClient.resetQueries(bundleSplitsQueryKey);
          closeModal();
          showNotification(
            t('exchange.allBundles.notifications.bundleBuySuccess'),
            NotificationTypeEnum.Success
          );
        },
        onError: (error: any) => {
          showNotification(
            `${t('exchange.allBundles.notifications.bundleBuyError')}:
            ${error?.response?.data?.message || ''}
            `,
            NotificationTypeEnum.Error
          );
        },
      }
    );
  };
};
