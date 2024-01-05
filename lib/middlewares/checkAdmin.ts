import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../services/auth';
import User from '../db/models/user';

export const checkAdmin = async (req: NextRequest): Promise<NextResponse> => {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json(
                {
                    status: 'error',
                    message:
                        'You must be signed in to view the protected content on this page.',
                },
                {
                    status: 403,
                }
            );
        }
        const { id } = session.user;
        const user = await User.findById(id);
        if (!user.isAdmin) {
            return NextResponse.json(
                {
                    status: 'error',
                    message: 'You are not authorized to view this page',
                },
                {
                    status: 403,
                }
            );
        }
        return NextResponse.next();
    } catch (error) {
        return NextResponse.json(
            {
                status: 'Error',
                message: 'Something Went Wrong',
                error: error,
            },
            {
                status: 500,
            }
        );
    }
};