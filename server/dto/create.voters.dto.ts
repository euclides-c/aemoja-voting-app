export interface CreateVotersDto {
	id?: string;
	name: string;
	email: string;
	universidade: string;
	bolsa: string;
	chegada: number;
	candidate?: boolean;
	foto: string;
	bio?: string;
}

// Link for the photo, do I Upload the photo the amazon s3, get and get the link?
