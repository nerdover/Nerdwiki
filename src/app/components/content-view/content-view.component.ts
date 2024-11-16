import {
  Component,
  ElementRef,
  inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MarkedService } from '../../core/services/marked.service';

@Component({
  selector: 'nwk-content-view',
  standalone: true,
  imports: [],
  templateUrl: './content-view.component.html',
  styleUrl: './content-view.component.scss',
})
export class ContentViewComponent implements OnInit {
  private readonly markedService = inject(MarkedService);

  @Input() content: string = '';
  @ViewChild('container', { static: true })
  container!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    this.markedService.parse(this.container, this.content);
  }
}
