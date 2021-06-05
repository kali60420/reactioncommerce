import { ref, Ref, computed } from '@vue/composition-api';
import { PrimaryShopId } from '@kali604/reactioncommerce-api/lib/types';
import { usePrimaryShopIdFactory } from './../factories';
import { SingleResult } from './../interfaces';
import { getPrimaryShopId as apiGetPrimaryShopId } from '@kali604/reactioncommerce-api';

export const cart: Ref<PrimaryShopId> = ref(null);

const getPrimaryShopId = async (): Promise<SingleResult<PrimaryShopId>> => {
    const primaryShopIdResponse = await apiGetPrimaryShopId();

    return {
        data: primaryShopIdResponse.data.primaryShopId
    };
};

export default usePrimaryShopIdFactory<PrimaryShopId>({ getPrimaryShopId });