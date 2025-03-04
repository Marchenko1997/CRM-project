export interface SummaryStats {
    promotions: number;
    categories: number;
    newCompanies: number;
    activeCompanies: number;
}

export interface SummarySales {
    id: string;
    companyId: string;
    companyTitle: string;
    sold: number;
    income: number;
}

export interface Country {
    id: string;
    title: string;
}

export interface Category {
    id: string;
    title: string;
}

export enum CompanyStatus {
    Active = 'active',
    NotActive = 'notActive',
    Pending = 'pending',
    Suspended = 'suspended',
}

export interface Company {
    id: string;
    title: string;
    description: string;
    status: CompanyStatus;
    joinedDate: string;
    hasPromotions: boolean;
    categoryId: string;
    categoryTitle: string;
    countryId: string;
    countryTitle: string;
    avatar?: string;
}

export interface Promotions {
    id: string;
    title: string;
    description: string;
    discount: number;
    companyId: string;
    companyTitle: string;
    avatar?: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const buildUrl = (...paths: string[]) =>
    `${API_BASE_URL}/${paths.join('/')}`;

const stringifyQueryParams = (params: Record<string, string>) =>
    new URLSearchParams(params).toString();

const sendRequest = async <T>(url: string, init?: RequestInit) => {
    const res = await fetch(url, init);
    if (!res.ok) {
        throw new Error(await res.text());
    }

    return (await res.json()) as T;
};

export const getSummaryStats = (init?: RequestInit) => {
    return sendRequest<SummaryStats>(buildUrl('summary-stats', '1'), init);
};

export const getSummarySales = (init?: RequestInit) => {
    return sendRequest<SummarySales[]>(buildUrl('summary-sales'), init);
};

export const getCountries = (init?: RequestInit) => {
    return sendRequest<Country[]>(buildUrl('countries'), init);
};

export const getCategories = (init?: RequestInit) => {
    return sendRequest<Category[]>(buildUrl('categories'), init);
};

export const getCompanies = (init?: RequestInit) => {
    return sendRequest<Company[]>(buildUrl('companies'), init);
};

export const getCompany = (id: string, init?: RequestInit) => {
    return sendRequest<Company>(buildUrl('companies', id), init);
};

export const getPromotions = async (
    params: Record<string, string> = {},
    init?: RequestInit,
) => {
    return sendRequest<Promotions[]>(
        `${buildUrl('promotions')}?${stringifyQueryParams(params)}`,
        init,
    );
};

export const createCompany = async (
    data: Omit<Company, 'id' | 'hasPromotions'>,
    init?: RequestInit,
) => {
    return sendRequest<Company>(buildUrl('companies'), {
        ...init,
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            ...(init && init.headers),
            'content-type': 'application/json',
        },
    });
};

export const createPromotion = async (
    data: Omit<Promotions, 'id'>,
    init?: RequestInit,
) => {
    return sendRequest<Promotions>(buildUrl('promotions'), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            ...(init && init.headers),
            'content-type': 'application/json',
        },
    });
};