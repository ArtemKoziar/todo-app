import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Subject, Subscription, timer } from 'rxjs';
import { take } from 'rxjs/operators';

interface CarouselItem {
  title: string;
  body: string;
  img: string;
}

const items = [
  {
    title: 'Get anything done',
    body: 'Easily break down your big goals into actionable items',
    img: './assets/images/get-ready.svg'
  },
  {
    title: 'Never Forget a thing',
    body: 'From groceries to picking up the kids, we help you remember it all, anytime, anywhere',
    img: './assets/images/forgot.svg'
  },
  {
    title: 'Live Strategically',
    body: 'Focus on the things that matter to you unlock your true potential',
    img: './assets/images/manage-tasks.svg'
  }
];

@Component({
  selector: 'login-carousel',
  templateUrl: './login-carousel.component.html',
  styleUrls: ['./login-carousel.component.scss']
})
export class LoginCarouselComponent implements AfterViewInit, OnDestroy {
  private _ngUnsubscribe = new Subject<void>();
  public carouselItems: CarouselItem[] = items;
  @ViewChild('carouselWrapper') private _carouselWrapper: ElementRef;
  @ViewChild('carousel') private _carousel: ElementRef;
  @ViewChild('carouselItem') private _carouselItem: ElementRef;
  private _player: AnimationPlayer;
  private _timeout: Subscription;
  public currentSlide = 0;
  public carouselItemWidth = 0;


  constructor(private builder: AnimationBuilder) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.carouselItemWidth = this._carouselWrapper.nativeElement.offsetWidth - 30);
    timer(3500).pipe(take(1)).subscribe(() => this.nextSlide(null));
  }

  private _buildAnimation(offset): AnimationFactory {
    return this.builder.build([
      animate('250ms ease-in', style({transform: `translateX(-${offset}px)`}))
    ]);
  }

  public nextSlide(slideNumber?: number): void {
    if (this._timeout) {
      this._timeout.unsubscribe();
    }
    this.currentSlide = slideNumber ?? this.currentSlide + 1;
    const offset = this.currentSlide * this._carouselWrapper.nativeElement.offsetWidth;
    const myAnimation: AnimationFactory = this._buildAnimation(offset);
    this._player = myAnimation.create(this._carousel.nativeElement);
    this._player.play();
    this._player.onDone(() => {
      this._timeout = timer(2500).pipe(take(1))
        .subscribe(() => this.nextSlide(this.currentSlide >= this.carouselItems.length - 1 ? 0 : null));
    });

  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }
}
