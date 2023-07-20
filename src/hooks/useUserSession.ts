import { useSession } from "next-auth/react";

export function useUserSession() {
	const { data: session } = useSession();
	console.log("USER:", session?.user);

	return {
		user: session?.user,
	};
}
