import { NextRequest, NextResponse } from 'next/server';
import { getRandomString } from './utils/get-random-string';
import { cookieNames } from './constants/cookie-names';

export const middleware = (request: NextRequest) => {
  if (!request.cookies.has(cookieNames.userId)) {
    const userId = getRandomString(8);

    // Add cookie to request so it's available from first load
    request.cookies.set(cookieNames.userId, userId);

    // Add cookie to response so it's set in the browser
    const response = NextResponse.next({ request });
    response.cookies.set(cookieNames.userId, userId);

    return response;
  }
};
