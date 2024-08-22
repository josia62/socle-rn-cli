import {
  useQuery,
  useMutation, useQueryClient
} from '@tanstack/react-query'
import {UserBDL} from '../bdl/User.bdl';
import { USER_QUERY_KEY } from '@/data/constants/query-key-name';
import { UpdateUserInterface } from '@/data/types/user.type';

export const UserSA = () => {
  const {
    getUsers, updateUserById
  } = UserBDL();
  const queryClient = useQueryClient();
  const getUsersSA = () => {
    const { isPending, error, data, isFetching } = useQuery({
      queryKey: [USER_QUERY_KEY.USER],
      queryFn: getUsers,
      staleTime: 10000,
      refetchOnWindowFocus: false,
      refetchInterval: 30000,
    });
    return {
      isPending,
      error,
      data,
      isFetching
    }
  }

  const updateUserConnected = useMutation({
    mutationFn: ({id, data}: UpdateUserInterface) => {
      return updateUserById(id, data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY.USER] });
    },
  })

  return {
    getUsersSA,
    updateUserConnected,
  };
};
