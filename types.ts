export interface ScheduleItem {
  time: string;
  group: string;
  description?: string;
}

export interface DailySchedule {
  day: string;
  items: ScheduleItem[];
}

export interface NewsItem {
  id: number;
  date: string;
  title: string;
  content: string[];
  tags?: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  date: string;
}

export interface Teacher {
  name: string;
  role: string;
  description: string;
}