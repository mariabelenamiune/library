export class Qod {
  success: Success;
  contents: Quotes;
  baseurl: string;
  copyright: CopyRight;
}

class Success {
  total: number;
}

class CopyRight {
  year: number;
  url: string;
}

class Quotes {
 quotes: Quote[];
}

class Quote {
  author: string;
  quote: string;
  tags: string[];
  id:  string;
  image: string;
  length: 0
}
