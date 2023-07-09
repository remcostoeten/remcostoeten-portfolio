import { Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell, Text } from '@tremor/react';
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const fakeUsers: User[] = [
    { id: 1, name: 'John Doe', username: 'johndoe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Smith', username: 'janesmith', email: 'janesmith@example.com' },
    // Add more fake user data here...
];

export default function UsersTable() {
    const users: User[] = fakeUsers;

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

