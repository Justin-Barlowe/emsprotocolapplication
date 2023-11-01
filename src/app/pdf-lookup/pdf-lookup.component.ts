import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pdf-lookup',
  templateUrl: './pdf-lookup.component.html',
  styleUrls: ['./pdf-lookup.component.css']
})
export class PdfLookupComponent implements OnInit {
  pdfLookup: { [key: string]: string } = {
    'key1': 'assets/adult-allergic.pdf',
    'key2': 'assets/adult-ams.pdf',
    'key3': 'assets/adult-asystole.pdf',
    'key4': 'assets/adult-teamcpr.pdf',
    'key5': 'assets/adult-backpain.pdf',
    'key6': 'assets/adult-bradycardia.pdf',
    'key7': 'assets/adult-cardiacarrest.pdf',
    'key8': 'assets/adult-chestpain.pdf',
    'key9': 'assets/adult-chf.pdf',
    'key10': 'assets/adult-childbirth.pdf',
    'key11': 'assets/adult-copd.pdf',
    'key12': 'assets/adult-cprtermination.pdf',
    'key13': 'assets/adult-diabetic.pdf',
    'key14': 'assets/adult-dialysis.pdf',
    'key15': 'assets/adult-drugassistedairway.pdf',
    'key16': 'assets/adult-failed airway.pdf',
    'key17': 'assets/adult-hypertension.pdf',
    'key18': 'assets/adult-hypotension.pdf',
    'key19': 'assets/adult-lvad.pdf',
    'key20': 'assets/adult-monotachy.pdf',
    'key21': 'assets/adult-obemergency.pdf',
    'key22': 'assets/adult-polytachy.pdf',
    'key23': 'assets/adult-postintubation.pdf',
    'key24': 'assets/adult-postresus.pdf',
    'key25': 'assets/adult-tachycardia.pdf',
    'key26': 'assets/adult-universal.pdf',
    'key27': 'assets/adult-vfib.pdf',
    'key28': 'assets/Airway.pdf',
    'key29': 'assets/ashtma-management.pdf',
    'key30': 'assets/behavioral.pdf',
    'key31': 'assets/bites.pdf',
    'key32': 'assets/blastinjury.pdf',
    'key33': 'assets/carbonmonoxide.pdf',
    'key34': 'assets/centrallines.pdf',
    'key35': 'assets/chemicalburns.pdf',
    'key36': 'assets/cp-bipap.pdf',
    'key37': 'assets/cp-copd.pdf',
    'key38': 'assets/cp-diabetic.pdf',
    'key39': 'assets/cp-followup.pdf',
    'key40': 'assets/cp-lab.pdf',
    'key41': 'assets/cp-medications.pdf',
    'key42': 'assets/cp-safety.pdf',
    'key43': 'assets/cp-social.pdf',
    'key44': 'assets/cp-wound.pdf',
    'key45': 'assets/crushinjury.pdf',
    'key46': 'assets/dental.pdf',
    'key47': 'assets/drowning.pdf',
    'key48': 'assets/extremitytrauma.pdf',
  };

  selectedPdf!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.selectedPdf = this.pdfLookup[id as string] || 'assets/default.pdf';
  }
}
