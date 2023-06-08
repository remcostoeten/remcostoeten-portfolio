import { User } from '@prisma/client';
import { AvatarProps } from '@radix-ui/react-avatar';

import { Avatar, AvatarFallback, AvatarImage } from '@/a/ui/avatar';
import { Icons } from '@/a/icons';

interface UserAvatarProps extends AvatarProps {
	user: Pick<User, 'image' | 'name'>;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
	return (
		<Avatar {...props}>
			{user.image ? (
				<AvatarImage alt="Picture" src={user.image} />
			) : (
				<AvatarFallback>
					<span className="sr-only">{user.name}</span>
					<Icons.user className="h-4 w-4" />
				</AvatarFallback>
			)}
		</Avatar>
	);
}
