import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-research',
  imports: [CommonModule],
  templateUrl: './featured-research.html',
  styleUrl: './featured-research.scss',
})
export class FeaturedResearch {
  selectedChip: string | null = null;

  selectChip(chip: string): void {
    this.selectedChip = this.selectedChip === chip ? null : chip;
  }
}
